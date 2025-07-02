import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";

export default class PropertyInsights extends RESTDataSource {
    override baseURL = "https://3e05ab39-fd91-4245-a94b-86ece30b49ec.online-tables.cloud.databricks.com";

    protected override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['Accept-Profile'] = 'zretreat_data_mesh_demo_2025';
        request.headers['Authorization'] = 'Bearer <YOUR TOKEN HERE>';
    }

    async getPropertyInsights() {
        return await this.get(`/api/2.0/workspace/1374115405812811/online/pgrest/sandbox_core_tech/recommended_properties_online_v3`);
    }
}