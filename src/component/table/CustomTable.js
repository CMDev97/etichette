import React, {useEffect, useState} from "react";
import {Pagination, Table} from "antd";
import {useGetData} from "../../utils/DataManager";
import Title from "antd/es/typography/Title";


function CustomTable({path, colums, selection=false, onChangeSelection, selected=[]}) {

    const [data, setData] = useState({
        selectedItems:selected,
        page:1,
        size: 10,
        total: 100,
        path:path,
    });

    const {store, progress, error} = useGetData(data.path + "?page=" + data.page + "&tot=" + data.size);


    const changeSize = (current, size) =>{
        setData({...data, size:size, page:current});
    }


    const handleOnChangePage = (page, pageSize) => {
        setData({...data, page: page, size: pageSize});
    }


    useEffect(()=>{
        setData({...data, loading: true, path:path})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])


    const onSelectChange = (selectedRowKeys, row) => {
        onChangeSelection(row);
        setData({ ...data, selectedItems:selectedRowKeys });
    };


    const selectedRowKeys = data.selectedItems;


    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };


    if (error != null){
        return <Title level={2}>Ci sono errori</Title>
    }


    return(
        <div className={"pb-3"}>
            <Table rowKey={(item) => (item.id)}  rowSelection={(selection) ? rowSelection : ''}
                   loading={progress} pagination={false} dataSource={(store != null) ? store.content: []} columns={colums} />
            <Pagination
                className={"my-3"}
                showSizeChanger
                pageSize={data.size}
                onShowSizeChange={changeSize}
                onChange={handleOnChangePage}
                defaultCurrent={data.page}
                total={(store != null) ? store.totalElements : 0}
            />
        </div>

    );

}

export default CustomTable;
