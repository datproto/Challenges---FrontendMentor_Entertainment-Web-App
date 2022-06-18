import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="flex xl:flex-col justify-between items-center xl:justify-start xl:max-w-[6rem] bg-blue-semi-dark xl:h-full text-white p-4 md:p-6 xl:gap-20 xl:rounded-3xl">
            <Image src="/assets/logo.svg" className="grow-0" width="25" height="20" />
            <div className="gap-6 md:gap-8" style={{ display: 'inherit', flexDirection: 'inherit' }}>
                <Link href="/">
                    <div className="w-4 h-4 text-white relative">
                        <Image src="/assets/icon-nav-home.svg" layout="fill" objectFit="contain" />
                    </div>
                </Link>
                <Link href="/">
                    <div className="w-4 h-4 relative">
                        <Image src="/assets/icon-nav-movies.svg" layout="fill" objectFit="contain" />
                    </div>
                </Link>
                <Link href="/">
                    <div className="w-4 h-4 relative">
                        <Image src="/assets/icon-nav-tv-series.svg" layout="fill" objectFit="contain" />
                    </div>
                </Link>
                <Link href="/">
                    <div className="w-4 h-4 relative">
                        <Image src="/assets/icon-nav-bookmark.svg" layout="fill" objectFit="contain" />
                    </div>
                </Link>
            </div>
            <div className="xl:mt-auto border border-white rounded-full h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 relative">
                <Image src="https://i.pravatar.cc/300" layout="fill" objectFit="contain" style={{ borderRadius: '100%' }} />
            </div>
        </div>
    )
}

export default Navbar