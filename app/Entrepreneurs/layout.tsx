import { ReactHTMLElement } from "react";

export default function layout({children}:{children: any}) {
    return (
        <div className="bg-black">
            {children}
        </div>
    )
}