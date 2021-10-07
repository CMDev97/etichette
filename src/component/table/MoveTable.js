import React, {useState, useCallback, useRef, useEffect} from 'react';
import { Table } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import {columsIngredientSelect} from "../Colums";

const type = 'DraggableBodyRow';

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
    const ref = useRef();
    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: monitor => {
            const { index: dragIndex } = monitor.getItem() || {};
            if (dragIndex === index) {
                return {};
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
            };
        },
        drop: item => {
            moveRow(item.index, index);
        },
    });
    const [, drag] = useDrag({
        type,
        item: { index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drop(drag(ref));

    return (
        <tr
            ref={ref}
            className={`${className}${isOver ? dropClassName : ''}`}
            style={{ cursor: 'move', ...style }}
            {...restProps}
        />
    );
};


export function DragSortingTable({items}){
    const [data, setData] = useState(items);

    const components = {
        body: {
            row: DraggableBodyRow,
        },
    };

    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const dragRow = data[dragIndex];
              setData(update(data, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragRow],
                    ],
                }));
        },
        [data],
    );

    useEffect(()=> {
        setData(items);
    }, [items]);

    return (
        <DndProvider backend={HTML5Backend}>
            <Table
                columns={columsIngredientSelect()}
                dataSource={data}
                components={components}
                onRow={(record, index) => ({
                    index,
                    moveRow,
                })}
            />
        </DndProvider>
    );
};
