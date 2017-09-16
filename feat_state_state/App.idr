module Main

import Effects
import Effect.StdIO
import Effect.File
import Effect.System

-------------------------------------------------------------
-- FFI
-------------------------------------------------------------

alert : String -> JS_IO ()
alert s = foreign FFI_JS "alert(%0)" (String -> JS_IO ()) s

-------------------------------------------------------------
--- Types
-------------------------------------------------------------

-------------------------------------------------------------
--- Data
-------------------------------------------------------------

-------------------------------------------------------------
--- Basic effect based program
-------------------------------------------------------------

||| Abstract IO based application
app : { [STDIO, SYSTEM] } Eff Integer
app = do  currentTime <- time
          putStrLn $ show currentTime
          pure currentTime

-------------------------------------------------------------
--- Program entry
-------------------------------------------------------------

||| main : JS_IO ()
||| main = alert "Hello world!"

||| Run application
main : IO ()
main = printLn "a 5es"
