import React, {useEffect, useState} from "react";
import {Pagination, Table} from "antd";
import {useGetData} from "../../utils/DataManager";
import Title from "antd/es/typography/Title";


function CustomTable({path, column, selection=false, onChangeSelection, selected=[], refresh=false}) {

    const [data, setData] = useState({
        selectedItems:selected,
        page:1,
        size: 10,
        total: 100,
        path:path,
    });


    const {store, progress, error, reload} = useGetData(data.path + (data.path.includes("?") ? '&' : '?') +  "page=" + data.page + "&tot=" + data.size);

    console.log("items select " , selected);

    const changeSize = (current, size) =>{
        setData({...data, size:size, page:current});
    }


    const handleOnChangePage = (page, pageSize) => {
        setData({...data, page: page, size: pageSize});
    }


    useEffect(()=>{
        if (refresh){
            reload();
        }
        setData({...data, path:path})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, refresh])


    const onSelectChange = (selectedRowKeys, row) => {
        onChangeSelection?.(row);
        console.log(selectedRowKeys);
        setData({ ...data, selectedItems:selectedRowKeys });
    };


    const selectedRowKeys = [...data.selectedItems];


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
                   loading={progress} pagination={false} dataSource={(store != null) ? store.content: []} columns={column} />
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
