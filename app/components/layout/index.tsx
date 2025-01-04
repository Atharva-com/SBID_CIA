import React from 'react'

import { ReactNode } from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <main className="flex-grow">
                {children}
            </main>
        </div>

    )
}

export default Layout