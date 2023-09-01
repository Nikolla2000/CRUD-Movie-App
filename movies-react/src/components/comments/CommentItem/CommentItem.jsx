import { useMemo, useState, useRef } from "react";
import useCount from "../../../hooks/useCount";
import useFormatDate, { useFormatOnlyTime } from "../../../hooks/useFormatDate";

const CommentItem = (props) => {
    const { author, content, date } = props.comment;
    const { formatDateTime } = useFormatDate();
    const formattedDate = useFormatOnlyTime(date);
    // const counter = useCount();
    // const [toggle, setToggle] = useState(false);
    // const someValueWithUseRef = useRef(`${author}": ${Math.random()}`);

    // const someValueDefault = `${author}": ${Math.random()}`

    // const someValueMemo = useMemo(() => {
    //     return `${author}": ${Math.random()}`;
    // }, [author])

    return <div>
        <p><strong>author: </strong>{author}</p>
        <p><strong>comment: </strong>{content}</p>
        <p><strong>date: </strong>{formattedDate}</p>
        <p><strong>date: </strong>{formatDateTime(date)}</p>
        {/* <p><strong>COUNT: </strong>{counter}</p> */}

        {/* <p>SOME_VALUE_DEFAULT: ${someValueDefault}</p>
        <p>SOME_VALUE_REF: ${someValueWithUseRef.current}</p>
        <p>SOME_VALUE_MEMO: ${someValueMemo}</p>
        <button onClick={() => {
            // setToggle((p) => !p);
            const newValue = `${author}": ${Math.random()}`;

            console.log({ OLD: someValueWithUseRef.current, NEW: newValue });

            someValueWithUseRef.current = newValue;
        }}>toggle${toggle ? 1 : 0}</button> */}
    </div>
}

export default CommentItem;