import React from 'react'
import CoinSpace from './CoinSpace';
import Box, { BoxColumn } from './Board.style';


const Board = (props) => {
    console.log(props);
    return (
        <Box>
            {
                props.board.map((ele, id) => {

                    const row = ele.map((e, i) => {
                        return (
                            <CoinSpace
                                key={i + id} type={e}
                            />
                            
                        )
                    });
                    return (
                        <BoxColumn onClick={() => { props.click(id) }}>
                            {row}
                        </BoxColumn>
                    );

                })
            }
        </Box>
    );
}

export default Board;