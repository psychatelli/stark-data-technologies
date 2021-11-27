
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

import './result.scss'

export default function Result(){
 
    const router = useRouter()
    const { session_id } = router.query
 
    const { data, error } = useSWR(
        session_id
        ? `/api/checkout/${session_id}`
        : null,
        (url) => fetch(url).then(res => res.json())
    )
        
    const removeCents = (x) => {
        return Number((x / 100).toFixed(2));
    }
    
    //To return and see data object in full form
    {/* <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre> */}

    return(
        <div className='result'>
            {data ? <div className='resultsContent'>
                <h3>Payment Result</h3>
                <div className='item status'> {data.session.payment_intent.status} </div>

                <div className='item total'> 
                    <div>Amount Pad:</div>  
                    <div>${removeCents(data.session.amount_total)} </div>  
                </div>

                <div className='item email'>
                    <div> Email Sent To: </div>
                    <div>{data.session.customer_details.email} </div>
                </div>

               <Link href='/'><Button variant="contained" style={{marginTop: 20 }}>Return Home</Button></Link>


            </div> : 'Loading...'}
        </div>
    )
}
