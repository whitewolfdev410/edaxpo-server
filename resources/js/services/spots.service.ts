import {apiClient} from "@b/services/http/client";




export const searchSpots = async () => {
    return apiClient.get('/api/spots',{params: {itemsPerPage: 10, page: 1}})
        .then(response => {
            return response.data;
        });
}
