import React from 'react'
import { DataTable }  from 'react-data-components-bulma'


export default function Home ({events}) {

    const columns = [
  { title: 'No', prop: 'id'  },
  { title: 'Title', prop: 'title' },
  { title: 'Location', prop: 'location' },
  { title: 'Date', prop: 'date' },
  { title: 'Note', prop: 'note' }
];

    return (
        <div className="container">
            <h2>ALL EVENTS</h2>
            <div className="events-layout">
                <DataTable
                    keys="id"
                    columns={columns}
                    initialData={events}
                    initialPageLength={5}
                    initialSortBy={{ prop: 'id', order: 'ascending' }}
                    caption={false}
                />
            </div>
        </div>
    )
}