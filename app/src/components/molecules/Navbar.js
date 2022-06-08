import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="flex justify-between bg-blue-semi-dark text-white p-4">
            <Image src="/assets/logo.svg" width="25" height="20" />
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
            <div className="border border-white h-6 w-6 relative">
                <Image src="https://i.pravatar.cc/300" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Navbar