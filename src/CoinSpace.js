import React from 'react';
import Coin,{RedCoin,GreenCoin,RedAnimateCoin,GreenAnimateCoin} from './CoinSpace.style'


const CoinSpace = (props) => {
 let coin = <Coin/>
    if(props.type ===1){
        coin = <RedCoin > <RedAnimateCoin />
                </RedCoin>
    }
    else if(props.type ===2){
        coin = <GreenCoin ><GreenAnimateCoin/></GreenCoin>
    }
    return(
        coin
    );
}

export default CoinSpace;