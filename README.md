## Endpoints.

- agenda => calendario.
- los jugadores => caracteristicas y weas.
- generador de match => skills
- registro de usuario => login, registro, login con google y facenbook.
- vista de usuario => perfil del usuario.

```
GET /jugadores
GET /jugador/:id
POST /jugador
PATCH /jugador/:id
DELETE /jugador/:id

GET /matches
POST /match
PATCH /math/:id

POST /register
POST /login
PATCH /change-password/:id
GET /user/:id

POST /eles
```

## Jugadores

```
GET /jugadores 200

{
    data: [ ... jugadores ],
    meta: {}

/
}

GET /jugador/:id 200

{
    data: { ...jugador },
    meta: {
        matches: [ ...matches ]
    }
}

POST /jugador 201

# Body to send
{
    jugador: {
        name,
        lastname,
        age,
        skills: {
            attack: float,
            defense: float,
            speed: float,
            wellnes: float,
            isGoalKeeper: boolean
        }
        positions: [ ...positions ]
    }
}

PATCH /jugador/ 203

{
    id,
    jugador: {
        ...field_to_patch
    }
}

DELETE /jugador/:id

GET /matches 200

{
    data: {
        ...matches
    },
    meta: {
        ...jugadores
    }
}

POST /match 201

# Body to send
{
    match: {
        date,
        time,
        place,
        coords: {
            lat,
            lgn
            geocode
        },
        players: {
            ids: [...id]
        }
    }
}

PATCH /match/ 203

{
    id,
    match: {
        ...match_to_patch
    }
}

POST /register 201

{
    user: {
        name,
        lastname,
        email,
        password
    }
}

POST /login

{
    user: {
        email,
        password
    }
}

# expected output

{
    user: {
        name,
        lastname,
        email,
        token
    }
}

/PATCH /change-password

{
    user: {
        email,
        old_password,
        new_password
    }
}

# expected output => 200 && redirect

GET /user/:id 200

{
    user: {
        name,
        lastname,
        email
    }
}

```

## Extras.

- definir middleware para determinar rutas publicas y privadas y autenticacion.
- validaciones de esquemas de objeto para retornar `422`.
- testeo con jest.

### Instrucciones.

Una vez clonado el repo hacer

- `npm i`
- `npm run d-build` hace el build del proyecto.
- `npm run up` levanta los contenedores en detached mode.
- `npm run bash` permite ingresar al contenedor del servidor.
- `npm run logs` permite ver los logs del contenedor.

Profit
