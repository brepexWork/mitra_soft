import React from 'react';
import {useParams} from "react-router-dom";
import Loader from "../../../components/Loader";
import {Alert} from "@mui/material";
import {userAPI} from "../services/UserService";

const UserInformation = React.memo(() => {
    const {id} = useParams()

    const {data: user, isLoading, isError} = userAPI.useFetchUserQuery(id ? id : '')

    return (
        <div>
            {isLoading && <Loader/>}

            {isError && <Alert severity={'error'}>Позьзователя не существует</Alert>}

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