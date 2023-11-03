import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react'

export default function Dashboard({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        profileSym: '',
        quoteSym: ''
        })

    function profileSubmit(e) {
        e.preventDefault()
        post('/companyprofile')
    }
    function quoteSubmit(e) {
        e.preventDefault()
        post('/companyquote')
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                         <form onSubmit={profileSubmit} style={{display:'flex', flexDirection:'column', width:'50%',margin:'0 auto'}}>
                            <label htmlFor="profileSym">Enter Company Symbol (AAPL, AMD etc): </label>
                              <input type="text" value={data.profileSym} onChange={e => setData('profileSym', e.target.value)}  style={{margin:'20px'}}/>
                                {errors.profileSym && <div>{errors.profileSym}</div>}
                            <button type="submit" disabled={processing} style={{textDecoration:'underline'}}>Find Company Profile</button>
                        </form>

                        <br></br>
                        <br></br>
                        <form onSubmit={quoteSubmit} style={{display:'flex', flexDirection:'column', width:'50%',margin:'0 auto'}}>
                            <label htmlFor="quoteSym">Enter Company Stock Quote (AAPL, AMD etc): </label>
                              <input type="text" value={data.quoteSym} onChange={e => setData('quoteSym', e.target.value)}  style={{margin:'20px'}}/>
                                {errors.quoteSym && <div>{errors.quoteSym}</div>}
                            <button type="submit" disabled={processing} style={{textDecoration:'underline'}}>Find Company Stock Quote</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
