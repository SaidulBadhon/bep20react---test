import { Button, TextField, Typography, Grid, Paper, Radio} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import {getOwner,getTrxtax,initMint,initBurn,initTaxChange,initburnFeeChange,initTaxAddressChange} from './contractFunctions'





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
      width:'50vw',
      height:'40vh',
      borderTopLeftRadius:'30px',
      borderBottomLeftRadius:'30px',
      background: 'linear-gradient(0deg,#1e3c72 0,#1e3c72 1%,#2a5298)'
    },
    paperII: {
      paddingTop:'5vh',
      paddingBottom:'5vh',
      width:'30vw',
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
    },
    textborder:{
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      'color':'white'
    }
  }));

const locoprint = (l) => {
  console.log(l)
}
      
const ManageToken = (props) => {
    const classes = useStyles();
    const web3 = props.data
    const address = props.address
    const[tokenAddress,setTokenAddress] = useState('')
    const[successCheck,setsuccessCheck] = useState(false)
    const[taxed,setTaxed] = useState(false)
    const[mint,setMint] = useState()
    const[burn,setBurn] = useState()
    const[tax,setTax] = useState()
    const[burnFee,setBurnFee] = useState()
    const[txaddress,setTxaddress] = useState()

    const CheckTax = () => {
      if (taxed) {
      return(
        <Grid container
              alignItems='center'
              justify='center'
              spacing={1}
              className={classes.paperfields}
              >
              <Grid item xs={6}>
                <TextField
                id="setTax"
                label="set Tax"
                type="string"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                value={tax}
                onChange={(e) => {
                  setTax(e.target.value)
                }}
                fullWidth
                />
              </Grid>
              <Grid item xs={3}>
              <Button 
                  variant="outlined" 
                  color="primary"
                  onClick = {async() => {
                    let tx = await initTaxChange(web3, tokenAddress, tax, address)
                    if (tx){
                      alert("Tax changed successfully")
                    }
                  }}
                  >                  Change Tax
                </Button>
              </Grid>  
              <Grid item xs={6}>
                <TextField
                id="setTax"
                label="set BurnFee"
                type="string"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                value={burnFee}
                onChange={(e) => {
                  setBurnFee(e.target.value)
                }}
                fullWidth
                />
              </Grid>
              <Grid item xs={3}>
              <Button 
                  variant="outlined" 
                  color="primary"
                  onClick = {async() => {
                    let tx = await initburnFeeChange(web3, tokenAddress, burnFee, address)
                    if (tx){
                      alert("Burn Fee changed successfully")
                    }
                  }}
                  >                  Change Fee
                </Button>
              </Grid>
              <Grid item xs={6}>
                <TextField
                id="setTax"
                label="set Address"
                type="string"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                value={txaddress}
                onChange={(e) => {
                  setTxaddress(e.target.value)
                }}
                fullWidth
                />
              </Grid>
              <Grid item xs={3}>
              <Button 
                  variant="outlined" 
                  color="primary"
                  onClick = {async() => {
                    let tx = await initTaxAddressChange(web3, tokenAddress, txaddress, address)
                    if (tx){
                      alert("Tax Address changed successfully")
                    }
                  }}
                  >                  Change Address
                </Button>
              </Grid>    
            </Grid> 
              
      )}
    }
    const ChangePaper = () => {
      if (successCheck){
      return(
        <Paper className={classes.paperII} elevation={10}>
           <Grid container
              alignItems='center'
              justify='center'
              spacing={1}
              className={classes.paperfields}
              >
              <Grid item xs={6}>
                <TextField
                id="mint"
                label="Mint"
                type="string"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                value={mint}
                onChange={(e) => {
                  setMint(e.target.value)
                }}
                fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <Button 
                  variant="outlined" 
                  color="primary"
                  onClick = {async() => {
                    let tx = await initMint(web3, tokenAddress, mint, address)
                    if (tx){
                      alert("Minted successfully")
                    }
                  }}
                  >
                  Mint
                </Button>
              </Grid>  
            </Grid>
            <Grid container
              alignItems='center'
              justify='center'
              spacing={1}
              className={classes.paperfields}
              >
              <Grid item xs={6}>
                <TextField
                id="burn"
                label="Burn"
                type="string"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
                }}
                value={burn}
                onChange={(e) => {
                  setBurn(e.target.value)
                }}
                fullWidth
                />
              </Grid>
              <Grid item xs={3}>
              <Button 
                  variant="outlined" 
                  color="primary"
                  onClick = {async() => {
                    let tx = await initBurn(web3, tokenAddress, burn, address)
                    if (tx){
                      alert("Burned successfully")
                    }
                  }}
                  >
                  Burn
                </Button>
              </Grid>  
            </Grid>
            {CheckTax()}
        </Paper>
        
      )
      }
    }

    return(
        <Grid container
        alignItems='center'
        justify='center'
        style={{ minHeight: "100vh" }}
        spacing={1}
        >
            <Grid width={300} item xs="auto" >
                <Paper className={classes.paperI} elevation={10}>
                    <Grid direction="column" justifyContent="center">
                    <p className={classes.whiteheader} style={{"fontSize":"18px"}}>Enter Token Address</p>
                    <br />
                    <Grid container
                        alignItems='center'
                        justify='center'
                        className-={classes.paperfields}
                        spacing = {3}
                        >
                    <Grid item xs={8}>
                    <TextField
                        id="token_address"
                        label="Token Address"
                        type="string"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        style: {color : 'white'}
                        }}
                        InputProps = {{
                          classes:{
                            textborder: classes.textborder,
                          },
                          style: {color : 'white'}
                        }}
                        className = {classes.textborder}
                        value={tokenAddress}
                        onChange={(e) => {
                            setTokenAddress(e.target.value)
                        }}
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={8}>
                        <Button 
                          variant="outlined" 
                          style={{'background':"white",'color':'blue'}}
                          onClick = {async() =>{
                            const owner = await getOwner(web3,tokenAddress)
                            if (owner == address){
                              const tax = await getTrxtax(web3,tokenAddress)
                              if (tax){
                                setTaxed(true)
                              }
                              setsuccessCheck(true)
                            }
                            else{
                              alert("You are not the owner or this contract was not created here.")
                              setsuccessCheck(false)
                            }
                          }}
                          >
                            Manage
                        </Button>
                    </Grid>

                    </Grid>

                    </Grid>
                </Paper>

            </Grid>
            <Grid width={300} item xs='auto'>
                {ChangePaper()}
            </Grid>


        </Grid>
    )

}    
  export default ManageToken
