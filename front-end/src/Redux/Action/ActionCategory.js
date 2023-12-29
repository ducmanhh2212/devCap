import { addCategoryNewAPI, deleteCategoryAPI, getListCategorysAPI, updateCategoryAPI } from "../../API/CategoryAPI"
import { FETCH_LIST_CATEGORY, FETCH_DELETE_CATEGORY, FETCH_UPDATE_CATEGORY } from "../Contants/ActionTypeCategory"

// action lien quan den call API
export let actionFetchListCategoryAPI = () => {
    return (dispatch) => {
        return getListCategorysAPI().then((response) => {
            dispatch(actionFetchListCategory(response));
        })
    }
}

// action dispatch xuong reducer
export let actionFetchListCategory = (getListCategory_Param) => {
    return {
        type: FETCH_LIST_CATEGORY,
        payload: getListCategory_Param,
    }
}
export let actionAddCategory_API = (categoryNew) => {
    return (dispatch) => {
        addCategoryNewAPI(categoryNew).then((response) => {
            dispatch(actionFetchListCategoryAPI());
        })
    }
}

export let actionDeleteCategory_API = (id) => {
    return (dispatch) => {
        deleteCategoryAPI(id).then((response) => {
            dispatch(actionDeleteCategory(id));
            dispatch(actionFetchListCategoryAPI());
        })
    }
}

export let actionDeleteCategory = (idDelete) => {
    return {
        type: FETCH_DELETE_CATEGORY,
        payload: idDelete,
    }
}

export let actionUpdateCategory_API = (categoryUpdate) => {
    return (dispatch) => {
        return updateCategoryAPI(categoryUpdate).then((response) =>{
            dispatch(actionUpdateCategory(response))
            dispatch(actionFetchListCategoryAPI());
        })
    }
}

export let actionUpdateCategory = (category) => {
    return {
        type: FETCH_UPDATE_CATEGORY,
        payload: category,
    }
}

export let actionEditCategory = (categoryEdit) => {
    return {
        type: FETCH_EDIT_PRODUCT,
        payload: categoryEdit,
    }
}

