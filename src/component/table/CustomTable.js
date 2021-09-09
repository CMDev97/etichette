import React, {useEffect, useState} from "react";
import {Pagination, Table} from "antd";
import {fetchData} from "../../actions/ActionProduct";


function CustomTable({path, colums, selection=false, onChangeSelection}) {

    const [data, setData] = useState({
        selectedItems:[],
        list:[],
        page:1,
        size: 10,
        total: 100,
        loading:false
    });

    const changeSize = (current, size) =>{
        console.log(current, size);
        setData({...data, size:size
        , page:current});
    }

    const onChangeData = (pageable)=>{
        setData({
            ...data, list: pageable.content,
            total:pageable.totalElements,
            size:pageable.size,
            loading: false,
        })
    }

    const handleOnChangePage = (page, pageSize) => {
        setData({...data, page: page, size: pageSize});
    }


    useEffect(()=>{
        setData({...data, loading: true})
        fetchData(path + "?page=" + data.page + "&tot=" + data.size, onChangeData);
    }, [path, data.page, data.size])

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        onChangeSelection?.(selectedRowKeys);
        setData({ ...data, selectedItems:selectedRowKeys });
    };

    const {selectedRowKeys} = data.selectedItems;

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return(
        <div className={"pb-3"}>
            <Table rowKey={(item) => (item.id + "-" + item.description)}  rowSelection={(selection) ? rowSelection : ''}
                   loading={data.loading} pagination={false} dataSource={data.list} columns={colums} />
            <Pagination
                className={"my-3"}
                showSizeChanger
                pageSize={data.size}
                onShowSizeChange={changeSize}
                onChange={handleOnChangePage}
                defaultCurrent={data.page}
                total={data.total}
            />
        </div>

    );

}

export default CustomTable;
