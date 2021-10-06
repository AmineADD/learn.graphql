module.exports =[
    {
        "id": 1,
        "author":  {
            "id": 1,
            "email": "string@email.com",
            "password": "password",
            "firstName": "firstname",
            "lastName": "lastname"
          },
        "comments": {},
        "content": "comment",
        "createdAt": new Date("12/10/2021"),
        "updatedAt": new Date("12/10/2021")
    },
    {
        "id": 2,
        "author":  {
            "id": 1,
            "email": "string@email.com",
            "password": "password",
            "firstName": "firstname",
            "lastName": "lastname"
          },
        "comments": [
            {
                "id": 1,
                "author":  {
                    "id": 1,
                    "email": "string@email.com",
                    "password": "password",
                    "firstName": "firstname",
                    "lastName": "lastname"
                  },
                "comments": {},
                "content": "comment",
                "createdAt": new Date("12/10/2021"),
                "updatedAt": new Date("12/10/2021")
            }
        ],
        "content": "comment",
        "createdAt": new Date("12/10/2021"),
        "updatedAt": new Date("12/10/2021")
    }
]