export const metadata = {
    title: "my application",
    description: "this is my first application",
}

export default function RootLayout({children}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}