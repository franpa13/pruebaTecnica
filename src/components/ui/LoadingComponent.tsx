import React from 'react'

import { SpinnerComponent } from './SpinnerComponent'
export const LoadingComponent = () => {
    return (

        <div className="bg-lightText dark:bg-darkPrimary fixed inset-0 flex justify-center items-center ">
            <SpinnerComponent></SpinnerComponent>

        </div>

    )
}
