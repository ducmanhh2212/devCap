import { api } from "./API"

// lay danh sach Category
export let getListCategorysAPI = () => {
    return api("GET", "categories", null);
};

export let addCategoryNewAPI = (categoryNew) => {
    return api("POST", "categories", categoryNew );
};

export let deleteCategoryAPI = (id) => {
    return api("DELETE", "categories/" + id, null);
};

export let updateCategoryAPI = (categoryUpdate) => {
    return api("PUT", "categories/" + categoryUpdate.id, categoryUpdate);
};