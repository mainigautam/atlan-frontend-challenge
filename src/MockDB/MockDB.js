export const database = [{
    "table_name": "Order Details",
    "data":[{
        "name":"orderID",
        "datatype":"integer"
    },{
        "name":"productID",
        "datatype":"integer"
    },
    {
        "name":"unitPrice",
        "datatype":"float"
    },{
        "name":"quantity",
        "datatype":"integer"
    },{
        "name":"discount",
        "datatype":"float"
    }
    ]},{
        "table_name": "Categories",
        "data":[{
            "name":"categoryID",
            "datatype":"integer"
        },{
            "name":"categoryName",
            "datatype":"varchar[250]"
        },
        {
            "name":"description",
            "datatype":"varchar[250]"
        },{
            "name":"picture",
            "datatype":"varbinary"
        }
        ]
    
    }]