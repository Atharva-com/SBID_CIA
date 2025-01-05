import React from 'react'
import { ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <main className="flex-grow">
                {children}
                <Footer />
            </main>
        </div>

    )
}

export default Layout