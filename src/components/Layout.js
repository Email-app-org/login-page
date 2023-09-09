import React from 'react';
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm';

function Layout() {
    return (
        <div className="Layout">
            <Header />
            <main>
                <LoginForm />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
