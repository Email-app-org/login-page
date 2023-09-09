import React from 'react';
import Header from './Header'
import Footer from './Footer'
import SignupForm from './SignupForm';

function Layout() {
    return (
        <div className="Layout">
            <Header />
            <main>
                <SignupForm />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;