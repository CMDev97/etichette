import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";


export function CustomBreadcrumb({end}){
    return <Breadcrumb>
        <Breadcrumb.Item href="">
            <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
}


