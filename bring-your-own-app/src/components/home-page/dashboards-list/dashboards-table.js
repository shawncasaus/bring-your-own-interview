import React, {useState, useEffect} from 'react';
import {Table, Pagination} from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

const DashboardsTable = (definitions) => {
    const [list, setList] = useState([]);
    const [paginatedList, setPaginatedList] = useState([]);
    const [curPag, setCurPag] = useState(1);
    const [pagNum, setPagNum] = useState(0);

    const PAG_SIZE = 10;

    //Parses paginated list to return body elements for table
    const getBody = (list) => {
        return _.map(list, (item) => {
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{moment(item.createdAt).format('DD-MM-YYYY')}</td>
                <td>{moment(item.updatedAt).format('DD-MM-YYYY')}</td>
            </tr>
        })
    }

    //handles pagination selection
    const getItems = (cur, pagNum) => {
        let active = cur;
        let items = [];

        for (let number = 1; number <= pagNum; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => {setCurPag(number)}}>
                    {number}
                </Pagination.Item>,
            );
        }

        return items;
    }

    //handles actual pagination of the data
    useEffect(() => {
        let paginatedArray = [];
        let length = list.length;

        if (list) {
            if (length <= PAG_SIZE) {
                for (var i = 0; i < length; i++) {
                    paginatedArray.push(list[i]);
                }
                setPaginatedList(paginatedArray);
            } else {
                if (curPag === pagNum) {
                    const curLow = length - (length % (PAG_SIZE));
                    const curHigh = length;
                    console.log('curLow', curLow);
                    console.log('curHigh', curHigh);
                    for (var i = curLow; i < curHigh; i++) {
                        paginatedArray.push(list[i]);
                    }
                    setPaginatedList(paginatedArray);
                } else {
                    const curLow = (curPag - 1) * PAG_SIZE;
                    const curHigh = curLow + PAG_SIZE;
                    for (var i = curLow; i < curHigh; i++) {
                        paginatedArray.push(list[i]);
                    }
                    setPaginatedList(paginatedArray);
                }
            }
        }

    }, [curPag, list, pagNum]);

    //sets the newList on change to definitions, and the new pagNum if it is to be changed
    useEffect(() => {
        if(definitions) {
            setList(definitions.definitions);
            setPagNum(Math.ceil(definitions.definitions.length / PAG_SIZE));
        }
    }, [definitions]);


    return (
        <div className="dashboards-table">    
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date Created</th>
                    <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>                
                {(definitions) ?
                    getBody(paginatedList)
                    : <tr colSpan="3"><p style={{textAlign: 'center', margin: 'auto'}}>oops... somethinf went wrong.</p></tr>
                }
                </tbody>
            </Table>  
            <div className='url-history-pagination'>
                <Pagination style={{justifyContent: 'center'}}>{getItems(curPag, pagNum)}</Pagination>
            </div>      
        </div>
    )
}

DashboardsTable.defaultProps = {
    definitions: []
}

DashboardsTable.propTypes = {
    definitions: PropTypes.array.isRequired
}

export default DashboardsTable;