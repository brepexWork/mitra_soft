import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IFetchDataResponse} from "../types/IFetchDataResponse";
import fetchUserData from "../ustils/fetchUserData";
import Loader from "../../../components/Loader";
import {Alert} from "@mui/material";

const UserInformation = React.memo(() => {

    const {id} = useParams()
    const [user, setUser] = useState<IFetchDataResponse>()
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        if (id && !isNaN(parseInt(id)))
            fetchUserData(parseInt(id)).then(userData => {
                if(typeof userData === 'string')
                    setError(userData)
                else
                    setUser(userData)
            })
    }, [])

    return (
        <div>
            {!user && !error && <Loader/>}

            {error && <Alert severity={'error'}>{error}</Alert>}

            {user &&
                <div>
                    <div className={`mt-4 font-bold text-2xl text-custom_brown`}>Личные данные</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Имя пользователя:</span> {user.name}</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Логин:</span> {user.username}</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>E-mail:</span> {user.email}</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Телефон:</span> {user.phone}</div>

                    <div className={`mt-4 font-bold text-2xl text-custom_brown`}>Локация</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Улица:</span> {user.address.street}</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Город:</span> {user.address.city}</div>

                    <div className={`mt-4 font-bold text-2xl text-custom_brown`}>Компания</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Наименование компании:</span> {user.company.name}</div>
                    <div><span className={`font-bold text-xl text-custom_red`}>Слоган:</span> {user.company.catchPhrase}</div>
                </div>
            }
        </div>
    );
})

export default UserInformation;