import {call, fork, take,put, delay, takeLatest} from 'redux-saga/effects'
import {getProductCategory} from '../apis/category'
import {getProductType} from '../apis/type'
import {getProductBrand} from '../apis/brand'
import {getProductRating} from '../apis/rating'
import {getProductSearch} from '../apis/search'
import {getProductHome} from '../apis/home'
import {getProductAsc,getProductDesc} from '../apis/filter_asc_desc'
import {ShowLoading,HiddenLoading} from '../actions/loading'
import {ToTalProduct} from '../actions/product'
import {ClearCategory} from '../actions/category'
import {ClearType} from '../actions/type'
import {ClearBrand} from '../actions/brand'
import {ClearRating} from '../actions/rating'
import {SetFilter} from '../actions/home'

function* trackingFetchDataCategory(payload){
    console.log('CATEGORY')
    // yield select de lay state
//    while(true) { // vì take chỉ thực hiện theo dõi 1 lần nên dùng vòng lặp vô tận để tái sử dụng
//     yield take(FilterCategory) //khi filtercategory đc dispatch thì bộ này đc active // blocking
    yield put(ShowLoading())
    yield put(SetFilter())
    yield put(ClearType())
    yield put(ClearBrand())
    yield put(ClearRating())
    const data = yield call(getProductCategory) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(3000)
    yield put(HiddenLoading())

//    }
   

}
function* trackingFetchDataType(){
    console.log('TYPE')

    yield put(ShowLoading())
    yield put(SetFilter())

    yield put(ClearBrand())
    yield put(ClearRating())
    const data = yield call(getProductType) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(300)
    yield put(HiddenLoading())

}
function* trackingFetchDataBrand(){
    console.log('BRAND')

    yield put(ShowLoading())
    yield put(SetFilter())

    yield put(ClearRating())
    const data = yield call(getProductBrand) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(300)
    yield put(HiddenLoading())
}
function* trackingFetchDataRating(){
    console.log('RATING')

    yield put(ShowLoading())
    yield put(SetFilter())

    const data = yield call(getProductRating) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(300)
    yield put(HiddenLoading())
}
function* trackingFetchDataSearch(){
    console.log('SEARCH')

    yield put(ShowLoading())
    const data = yield call(getProductSearch) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(100)
    yield put(HiddenLoading())
}
function* trackingFetchDataFilterAsc(){
    console.log('ASC')

    yield put(ShowLoading())
    const data = yield call(getProductAsc) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(200)
    yield put(HiddenLoading())
}
function* trackingFetchDataFilterDesc(){
    console.log('DESC')

    yield put(ShowLoading())
    const data = yield call(getProductDesc) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(200)
    yield put(HiddenLoading())
}
function* trackingClearFilter(){
    yield put(ShowLoading())
    yield put(ClearCategory())
    yield put(ClearType())
    yield put(ClearBrand())
    yield put(ClearRating())
    const data = yield call(getProductHome) // gọi api //blocking
    if(data.status == 'SUCCESS'){
        yield put(ToTalProduct(data.data)) // put dung de dispatch actions
     }
    yield delay(200)
    yield put(HiddenLoading())
}

function* rootSaga() {
    //fork theo dõi 1bo các action // là non-blocking : thực hiện mà k chờ nhau ( gọi song song )
    // yield fork(trackingFetchDataCategory)
    yield takeLatest('FILTERCATEGORY',trackingFetchDataCategory) // thay the cho fork + take // khi actions filter được didsspatach thì tracking đc gọi nhận về action(type + payload)
    yield takeLatest('ADD_TYPE',trackingFetchDataType) // thay the cho fork + take
    yield takeLatest('REMOVE_TYPE',trackingFetchDataType) // thay the cho fork + take
    yield takeLatest('ADD_BRAND',trackingFetchDataBrand) // thay the cho fork + take
    yield takeLatest('REMOVE_BRAND',trackingFetchDataBrand)
    yield takeLatest('FILTERRATING',trackingFetchDataRating)
    yield takeLatest('SET_INPUT_SEARCH',trackingFetchDataSearch)
    yield takeLatest('SET_FILTER_ASC',trackingFetchDataFilterAsc)
    yield takeLatest('SET_FILTER_DESC',trackingFetchDataFilterDesc)
    yield takeLatest('CLEAR_FILTER',trackingClearFilter)
}
export default rootSaga