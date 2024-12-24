"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {motion} from "framer-motion"



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { State, useFormsState, useThemeState } from "@/store/formState";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"







export default function Form(){
    const[progressWidth , setProgressWidth] = useState(33);
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[pinCode, setPinCode] = useState("");
    const[houseNumber, setHouseNumber] = useState("");
    const[street, setStreet] = useState("");

    const[district, setDistrict] = useState("");
    const[state, setState] = useState("");
    const[preference, setPreference] = useState("");
    const[internships, setInternships] = useState(false);
    const[openSource, setOpenSource] = useState(false); 

    const[terms, setTerms] = useState(false);

    const updateFormState = useFormsState((state) => state.updateState);
    const themeState = useThemeState((state : any) => state.theme);
    const data : State = useFormsState((state) => state);
    
    const {toast} = useToast()

    function handleSubmit(){
        updateFormState({
            firstName,
            lastName,
            email,
            phone,
            pinCode,
            houseNumber,
            street,
            district,
            state,
            preference,
            internships,
            openSource
        })
    }

return (
<div className="font-playfair min-h-screen sm:w-full" style={{ backgroundColor: themeState ? "white" : "black" }}>
<div style={{ width: `${progressWidth}%` }} className='h-1 bg-blue-500 transition-all duration-500 rounded-xl'></div>

<div className="w-full flex items-center justify-center pt-16" style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black"}}>
<Tabs defaultValue="account" className="w-[400px] sm:w-[90%]" >
    <TabsList className="flex gap-2 justify-evenly py-4 text-[18px] sm:text-[14px] sm:gap-0 sm:w-full" style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "" : "gray" , borderColor: themeState ? '' : 'gray'}}>
        <TabsTrigger value="account" onClick={()=> setProgressWidth(33)}>Personal Details</TabsTrigger>
        <TabsTrigger value="address" onClick={()=> setProgressWidth(66)}>Address Details</TabsTrigger>
        <TabsTrigger value="preference" onClick={()=> setProgressWidth(100)}>Preferences</TabsTrigger>
    </TabsList>
    
    <TabsContent value="account" className="border p-4 rounded-lg transition-all duration-500">
    <motion.div className="p-4 flex flex-col gap-2" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
    <p className="font-semibold">Personal Details</p>
    <div className="flex gap-2 flex-col">
    <label htmlFor="f-name" className="">First Name</label>
    <input type="text" id="f-name" className="border p-2 rounded-lg" placeholder="Abhishek" onChange={(e) => setFirstName(e.target.value)} value={firstName} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

    <div className="flex gap-2 flex-col">
    <label htmlFor="l-name" className="">Last Name</label>
    <input type="text" id="l-name" className="border p-2 rounded-lg " placeholder="Singh" onChange={(e) => setLastName(e.target.value)} value={lastName} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

    <div className="flex gap-2 flex-col">
    <label htmlFor="email" className="">Email</label>
    <input type="email" id="email" className="border p-2 rounded-lg" placeholder="abhiifour@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required  style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>


    <div className="flex gap-2 flex-col">
    <label htmlFor="phone" className="">Phone Number</label>
    <input type="tel" id="phone" className="border p-2 rounded-lg" placeholder="+91" onChange={(e) => setPhone(e.target.value)} value={phone} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>
    </motion.div>



    </TabsContent>
    <TabsContent value="address" className="border p-4 rounded-lg">   
    <motion.div className="p-4 flex flex-col gap-2 " initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
    <p className="font-semibold">Address Details</p>
    <div className="flex gap-2 flex-col">
    <label htmlFor="code" className="">Pin Code</label>
    <input type="text" id="code" className="border p-2 rounded-lg" placeholder="845401"  onChange={(e) => setPinCode(e.target.value)} value={pinCode} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

    <div className="flex gap-2 flex-col">
    <label htmlFor="house" className="">House number</label>
    <input type="text" id="house" className="border p-2 rounded-lg" placeholder="4" onChange={(e) => setHouseNumber(e.target.value)} value={houseNumber} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

    <div className="flex gap-2 flex-col">
    <label htmlFor="street" className="">Street</label>
    <input type="text" id="street" className="border p-2 rounded-lg" placeholder="gali number 8" onChange={(e) => setStreet(e.target.value)} value={street} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

   


    <div className="flex gap-2 flex-col">
    <label htmlFor="district" className="">District</label>
    <input type="text" id="district" className="border p-2 rounded-lg" placeholder="champaran" onChange={(e) => setDistrict(e.target.value)} value={district} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>

    <div className="flex gap-2 flex-col">
    <label htmlFor="state" className="">State</label>
    <input type="text" id="state" className="border p-2 rounded-lg" placeholder="bihar" onChange={(e) => setState(e.target.value)} value={state} style={{color: themeState ? "black" : "white", backgroundColor: themeState ? "white" : "black" , borderColor: themeState ? '' : 'gray'}}/>
    </div>
    </motion.div>
    </TabsContent>
    <TabsContent value="preference" className="border p-4 rounded-lg transition-all duration-500">
    <motion.div className="flex flex-col gap-8 p-4" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
    

    <div className="flex flex-col gap-2">
    <div>Select preference</div>
    <Select>
    
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select tech stack" />
    </SelectTrigger>
    <SelectContent >
        <SelectItem value="light" onClick={() => setPreference("Reactjs")}>Reactjs</SelectItem>
        <SelectItem value="dark"  onClick={() => setPreference("Nextjs")}>Nextjs</SelectItem>
        <SelectItem value="system" onClick={() => setPreference("Vuejs")}>Vuejs</SelectItem>
    </SelectContent>
    </Select>

    </div>
    <div className="flex gap-2 items-center" onClick={()=> setInternships(!internships)}>
    <Switch id="switch" style={{ backgroundColor: themeState ? "" : "gray"}} />
    <label htmlFor="switch" className="text-slate-500">done any internship</label>
    </div>
    <div className="flex gap-2 items-center" onClick={()=> setOpenSource(!openSource)}>
    <Switch id="switch2" style={{ backgroundColor: themeState ? "" : "gray"}}/>
    <label htmlFor="switch2" className="text-slate-500">Open sourced</label>
    </div>


        
    <div className="flex gap-2 items-center">
        <Checkbox id="check" className="border-slate-500" onClick={() => setTerms(!terms)}/>
        <label htmlFor="check " className="text-slate-500">Accept terms and conditions</label>
        </div>



    {/* button */}
    <Dialog >
    {
      terms ?      <DialogTrigger className="flex justify-center p-4 bg-slate-500 text-white rounded-lg cursor-pointer transition-all duration-500" onClick={()=>{
        if(email && phone && pinCode && houseNumber && street && district && state && preference){
            handleSubmit()
        }   
        else{
            toast({
                title: "Please fill all the fields",
                description: "All fields are mandatory"
            })
        }
      }}> 
      Submit
  </DialogTrigger> : <DialogTrigger className="p-4 bg-slate-500 text-white rounded-lg cursor-pointer hidden" > </DialogTrigger>
    }
   
    <DialogContent className="sm:w-[95%]" >
        <DialogHeader>
        <DialogTitle className="text-[18px]">Are you absolutely sure?</DialogTitle>
        <DialogDescription>
        review your details before submitting
        </DialogDescription>
        </DialogHeader> 
        <div className="flex gap-4 pt-4">
        <div className=" flex flex-col gap-4 text-[14px]">
        <div className="">
            First Name : <span className="p-2 border rounded-lg  text-[12px]">{data.firstName}</span> 
        </div>
        <div>
            Last Name : <span className="p-2 border rounded-lg text-[12px]">{data.lastName}</span> 
        </div>
        <div>
            Email : <span className="p-2 border rounded-lg text-[12px]">{data.email}</span> 
        </div>
        <div>
            Phone : <span className="p-2 border rounded-lg text-[12px]">{data.phone}</span> 
        </div>
        </div>

        <div className=" flex flex-col gap-4 text-[14px]">
        <div>
            Pin code : <span className="p-2 border rounded-lg text-[12px]">{data.pinCode}</span> 
        </div>
        <div>
            House number : <span className="p-2 border rounded-lg text-[12px]">{data.houseNumber}</span> 
        </div>
        <div>
            Street : <span className="p-2 border rounded-lg text-[12px]">{data.street}</span> 
        </div>
      
        <div>
            District : <span className="p-2 border rounded-lg text-[12px]">{data.district}</span> 

        </div>
        <div>
            State : <span className="p-2 border rounded-lg text-[12px]">{data.state}</span> 
        </div>
        </div>

        <div className=" flex flex-col gap-4 text-[14px]">
        <div>Preference : <span className="p-2 border rounded-lg text-[12px]">{data.preference}</span> </div>
        <div>Internship : <span className="p-2 border rounded-lg text-[12px]">{data.internships}</span> </div>
        <div>Open Source : <span className="p-2 border rounded-lg text-[12px]">{data.openSource}</span> </div>
        
        </div>
        </div>
        <button className="flex justify-center p-4 bg-slate-500 text-white rounded-lg cursor-pointer" type="submit" onClick={() => {
            handleSubmit();
            toast({
                title: "Form submitted 🎉",
                
            })
        }}>Submit</button>
    </DialogContent>
    </Dialog>

    
    </motion.div>

    </TabsContent>
</Tabs>
</div>
  
</div>
    )
}