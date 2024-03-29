const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://github.com/MrIsuru/PRESIDENT-MD"                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://isurumongo:isurumongo1@cluster0.ikguzro.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94766632281" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94766632281";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94764104130";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94764104130,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_28_03_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid1B0UnliWTVxNXFTRVdHTnBVbXFtYnNiYjl4c04xRFdJV1RveGJXc1NHcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpJek5uVkZNcFZnL3F6bHF4UUkyd2pBV0JTY3QwLzJObUQ2TFlnUm1ualk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUwzaTAzY3NNYS9tdXlIcWR1dzRrenNhbUVMU3IzVGJVMUR6bjBRN1ZVVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFXeENlV3R3TkNoN3hBYzZCTEZ3cTNqa2g4S1djRmRWV2dHRk5IUE1mRGs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUxmY3BmRDNhT0xiUlJtbko5UlNFeWdRRVNMb3J4MDFJTVI2cHYzNnZGcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlcxZHpWR3ExMllDRUhmMm93UjgrMHo5cGM4dzZzWUlGeWdQMis3citHWDA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpSk1NdFRkdkFEd0hYdGhZb2NSVWVDeExPSDJmUGd3aHNYRmpmK2pkSzBZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieGcxV0pYYjBrL3V3YTFnczVKblFOcm8xY1N5T0N6eUxtSGl0MWlZVG54dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJMbExiTnVZSkVxNTZHbk84WUVzeEk5Q0Z2eFZlaFVrV2FmOUU3SHd0N0JsNktkRXRaRHkxMTRCM0xQR2ZXTko0L1pzTjhkNmpldjNwVWhMUDNTY3VpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzgsXCJhZHZTZWNyZXRLZXlcIjpcImtzeFFSOWJBaHc2RnVNamIwU1dDWHJ2NDNXeDhtcG9JNVhrTkRHcHRCczg9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc2NDEwNDEzMEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJGNUU3RjdBRUVDMjJCRUYyMjlBRTdFQjEyRkMwODBFMlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNjg2NTI3fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjk0NzY0MTA0MTMwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjM3MkE3QjM0MTc0RkMxQzAxM0YzNUY5M0RENTJDNjM2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE2ODY1Mjd9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ2Y0ZjUkFSLVEzcWJLMEJpTkMtNWZnXCIsXCJwaG9uZUlkXCI6XCI0NWUyYTZkNy1kZjQwLTRjMDYtYmQwOC01YTgxNDI1NGIzYjFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm9tUGR2Mk1uNFhUcDVURThvR0s5cU9XL2UvQT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJkN2Mrb0VyM29TQ05BS0htMjY0bVJnNWpMSVE9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiWEhKUFlEQU1cIixcIm1lXCI6e1wiaWRcIjpcIjk0NzY0MTA0MTMwOjdAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjAzNjI5MTQ3NDcxOTY3OjdAbGlkXCIsXCJuYW1lXCI6XCJDSy1URUFNIHwgVEVTVCBCT1RcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ016d3ozZ1ErSWFac0FZWUFTQUFLQUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJrMmpjTUVZSU1MNVlJUkM3bmRkVTR5NlQvaVAyaHJNdS83NGVva0dSYkhnPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwib2grNnpmeXcwLzVieldBczNUcFBRWndRRkxnajVyZ0RQRytWQ2tVMmtWc0FhYkVBeTY3Ny9KK29ERUpDVFg4NitCbDd0QlViOWtOTTQ5UzhiUWVaQVE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCI3ZTk0di9hVTNTa3VUM1dRM0pUWjJnQURmRFVveS94a2pvQVUzN2xYUUM0M3dtOGU4ZjFzOGxVb0p0dWVnNm1pTEhTcWpsMi9tZ2cveUNsMzVrV1pqQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTQ3NjQxMDQxMzA6N0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJaTm8zREJHQ0RDK1dDRVF1NTNYVk9NdWsvNGo5b2F6THYrK0hxSkJrV3g0XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTY4NjUyNCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFGM1ZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGM1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDV251YkszMTdRYXV4b2hGMG1BdTBEUVJTK0tBRGU4eklMM3NDYVBFYktrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1Mjk2Njk4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTY4NjUwMzQ4NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
