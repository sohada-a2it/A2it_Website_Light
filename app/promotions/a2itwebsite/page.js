import React from 'react'
import Navbar from '@/components/promotion/navbar'
import Banner from '@/components/promotion/banner'
import Project from '@/components/promotion/project'
import Package from '@/components/promotion/package'
import Contact from '@/components/promotion/contact'
function page() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Project />
            <Package />
            <Contact />
        </div>
    )
}

export default page
