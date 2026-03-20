import styles from './topmenu.module.css'
import Link from 'next/link'

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
    return(
        <div className='text-cyan-600 text-sm font-semibold hover:text-cyan-800 transition-colors'>
            <Link href={pageRef} className={styles.itemcontainer}>
                {title}
            </Link>
        </div>
    )
}