Validador de consumer de API CKAN - SERVER JS(NODE)
---

STEPS : 
* Levantar container
    -   docker build -t server-express .
    -   docker run -p 3000:3000 --name server-express-container -d -it server-express

Modo de uso para validar el consumo de esa api

-   localhost:3000/{HTPP-PROTOCOL}/{DNS|IP:PORT}
-   ie:  http://localhost:3000/https/ckan-badata-dev.gcba.gob.ar/


Si el Te devuelve el resultado de una api como por ejemplo : 
```
{
    "help": "http://ckan-badata-dev.gcba.gob.ar/api/3/action/help_show?name=group_list",
    "success": true,
    "result": [
        "administracion-publica",
        "covid-19",
        "cultura-y-turismo",
        "desarrollo-humano",
        "economia-y-finanzas",
        "educacion",
        "genero",
        "medio-ambiente",
        "movilidad",
        "salud",
        "seguridad",
        "urbanismo-y-territorio"
    ]
}

```

Indica que el servidor creado puede tomar datos desde la api de ckan.
