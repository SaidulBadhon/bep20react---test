import { Button, TextField, Typography, Grid, Paper, Radio} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { createWallet, sendFeetoRouter } from './blockchaintx'





const useStyles = makeStyles((theme) => ({
    appBarroot: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paperI: {
      paddingTop:'5vh',
      width:'25vw',
      height:'82vh',
      borderTopLeftRadius:'30px',
      borderBottomLeftRadius:'30px',
      background: 'linear-gradient(0deg,#1e3c72 0,#1e3c72 1%,#2a5298)'
    },
    paperII: {
      paddingTop:'5vh',
      paddingBottom:'5vh',
      width:'50vw',
      borderTopRightRadius:'30px',
      borderBottomRightRadius:'30px'
    },
    bodyroot: {
      background: '#E8E8E8'
    },
    paperfields: {
      marginBottom: '10px',
      paddingBottom: '10px'
    },
    whiteheader: {
      color: 'white'
    }
  }));

const locoprint = (l) => {
  console.log(l)
}
      
const CreateToken = (props) => {
    const classes = useStyles();
    const [token,setToken] = useState('')
    const [fromAddress,setfromAddress] = useState('')
    const [symbol,setSymbol] = useState('')
    const [supply,setSupply] = useState('')
    const [decimals,setDecimals] = useState('')
    const [isMoon,setisMoon] = useState(false)
    const [isStandard,setisStandard] = useState(true)
    const [trx_Tax,setTrx_Tax] = useState('0')
    const [btncreate,setbtncreate] = useState(true)
    const [contractAddress,setContractAddress] = useState('')



    const deflationary = () => {
      if(isMoon){
        return(
        <Grid container
        alignItems='center'
        justify='center'
        className-={classes.paperfields}
        >
          <Grid item xs="4">
          <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Tax</p>
          </Grid>
          <Grid item xs="6">
            <TextField
            id="tax"
            label="Tax"
            inputProps={{min: 0, style: { textAlign: 'center' }}}
            type="Number"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
            value={trx_Tax}
            onChange={(e) => {
              setTrx_Tax(e.target.value)
            }}
            fullWidth
            />
          </Grid>
        </Grid>
        )
      }
    }

    const web3 = props.data
    const address = props.address
    return(

    <Grid container
    alignItems='center'
    justify='center'
    style={{ minHeight: "100vh" }}
    spacing={1}>
      <Grid width={300} item xs='auto'>
        <Paper className={classes.paperI} elevation={15}>
          <Typography className={classes.whiteheader} variant="h5">BEP20 Token</Typography>
          <Typography className={classes.whiteheader} variant="h5">Generator</Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button variant="outlined" style={{'color':'green','background':'white','border':'1px solid green'}} href="/tokenAdmin">
                  Token Admin
            </Button>
        </Paper>
      </Grid>
      <Grid item xs='auto'>
      <Paper className={classes.paperII} elevation={15}>
          <Typography variant="h6">Token Generator</Typography>
  
          <br />
          <br />
          <Grid direction="row" spacing={2}>
  
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
              <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Token Name</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="token_name"
              label="Token Name"
              type="string"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={token}
              onChange={(e) => {
                setToken(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
            <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Token Symbol</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="token_symbol"
              label="Token Symbol"
              type="string"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={symbol}
              onChange={(e) => {
                setSymbol(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Initial Supply</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="initial_supply"
              label="Tokens"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              type="Number"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={supply}
              onChange={(e) => {
                setSupply(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="4">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Decimals</p>
            </Grid>
            <Grid item xs="6">
              <TextField
              id="decimals"
              label="Decimals"
              inputProps={{min: 0, style: { textAlign: 'center' }}}
              type="Number"
              variant="outlined"
              InputLabelProps={{
              shrink: true,
              }}
              value={decimals}
              onChange={(e) => {
                setDecimals(e.target.value)
              }}
              fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          >
            <Grid item xs="3">
            <p style={{"color":"#606060","fontSize":"16px","fontWeight":"bold"}}>Other options</p>
            </Grid>
            <Grid item xs="3">
              <Grid container alignItems='center' justify='center' className-={classes.paperfields}>
                
                <Radio
                checked={isStandard} 
                onChange={(e) => {
                  setisStandard(e.target.checked)
                  setisMoon(isStandard)

                  if (isStandard){
                    setTrx_Tax(0)
                  }
                }}  
                inputProps={{ 'aria-label': 'primary checkbox' }} />
                <p>Standard</p>
              </Grid>
            </Grid>
            <Grid item xs="3">
              <Grid container alignItems='center' justify='center' className-={classes.paperfields}>
                
                <Radio
                checked={isMoon} 
                onChange={(e) => {
                  setisMoon(e.target.checked)
                  setisStandard(isMoon)
                  if (isStandard){
                    setTrx_Tax(0)
                  }
                }}  
                inputProps={{ 'aria-label': 'primary checkbox' }} />
                <p>Deflationary</p>
              </Grid>
            </Grid>
          </Grid>
          <br />
          {deflationary()}
          <br />
          <Grid container
          alignItems='center'
          justify='center'
          className-={classes.paperfields}
          spacing={2}
          >
            <Grid item>
            <Button variant="outlined" color="primary" 
          onClick={async() => {
              
            if (address.length==0){
                alert("Connect wallet first")
            }
            else{
            let tkn_pm = [token,symbol,decimals,supply,trx_Tax]
            let tx = await sendFeetoRouter(web3,address,tkn_pm)
            await createWallet()
            if(tx){
              setbtncreate(true)
            }
            alert("Transaction processed please wait")

            if (isStandard){
              setTrx_Tax(0)
            }
            
            const create_params = JSON.stringify({"token_name":token,"token_symbol":symbol,"decimals":decimals,"init_supply":supply,"trx_tax":trx_Tax,"custom_owner":address})
            
            const request_options_deploy = {
              method:'POST',
              headers: {
                'Content-Type':'application/json'
              },
              body: create_params
            };

            const request_options_verify = {
              method:'GET',
              headers: {
                'Content-Type':'application/json'
              }
            };
         
            

            //fetch('http://36b70dd0ab3f.ngrok.io/create', request_options_create)

            //setTimeout(() => {fetch('http://36b70dd0ab3f.ngrok.io/compile',request_options_compile)},15000)

            setTimeout(() => {fetch('http://36b70dd0ab3f.ngrok.io/deploy',request_options_deploy)})

            //setTimeout(() => {fetch('http://36b70dd0ab3f.ngrok.io/verify',request_options_deploy)},75000)
            
            setTimeout(() => {fetch('http://36b70dd0ab3f.ngrok.io/fetchAddress',request_options_verify)
            .then(response => response.json())
            .then(data => alert(data['token']))},25000)
            }    
}}>
            CREATE TOKEN
          </Button>
            </Grid>
          </Grid>
            <createBtn />
          </Grid>
      </Paper>
      </Grid>
  </Grid>
    )}

  export default CreateToken
