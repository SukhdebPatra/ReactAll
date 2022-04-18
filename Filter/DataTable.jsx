
const DataTable=({data})=>{
  
    return (
        <>
        <pre>{JSON.stringify(data)}</pre>
      <div className="container">
          <div className="row-md-2">
              <div className="col-md-8">
                  <table className='table table-hover'>
                 
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Website</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          data.map((ele)=>{
                              return <tr key={ele.id}>
                                  <td>{ele.id}</td>
                                  <td>{ele.name}</td>
                                  <td>{ele.email}</td>
                                  <td>{ele.website}</td>
                              </tr>
                          })
                      }
                  </tbody>
                       
                  </table>
              </div>
          </div>
      </div>
    
        </>
    )
}

export default DataTable