import React from 'react';
import DashboardsTable from './dashboards-table';
import { useHomePage } from '../context';

const DashboardsList = () => {
    const { definitions, loading, error } = useHomePage();

    //handle loading and errors
    if (loading) return 'loading...';
    else if (error) return 'oops... something went wrong';

    return (
        <div className="dashboards-list">
            <h1>Dashboards</h1>
            <DashboardsTable definitions={definitions} />
        </div>
    )
}

export default DashboardsList;