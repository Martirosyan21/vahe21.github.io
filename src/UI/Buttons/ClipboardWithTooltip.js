import React from "react";
import {  Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";

export function ClipboardWithTooltip({title}) {
    const [_, copy] = useCopyToClipboard();
    const [copied, setCopied] = React.useState(false);

    return (
        <Tooltip content={copied ? "Copied" : "Copy"} className={'bg-transparent'}>
            <Button
                onMouseLeave={() => setCopied(false)}
                onClick={() => {
                    copy("astghik.yv@gmail.com").then();
                    setCopied(true);
                }}
                className={'bg-transparent p-0 pr-1.5 pl-1.5 mr-3'}
            >
                <p className={'cursor-pointer text-light font-Kanit text-s  '} style={{ ...styles.opacity_08, ...styles.buttonTextStyles }}
                        >
                    {title}
                </p>
            </Button>
        </Tooltip>
    );
}

const styles = {
    buttonTextStyles:{
        fontWeight:'200',
        fontStyle:'italic',
    },
    opacity_08:{
        opacity:0.8
    }
}
