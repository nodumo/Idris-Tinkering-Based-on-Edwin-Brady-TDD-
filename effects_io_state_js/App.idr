module Main

import Effects
import Effect.StdIO

-------------------------------------------------------------
--- Types
-------------------------------------------------------------

Amount : Type
Amount = Int

-------------------------------------------------------------
--- Data
-------------------------------------------------------------

data Position
  = C
  | DB
  | DL
  | OL
  | QB

||| Name
data Name
  = Personal String
  | Surname String
  | NickName String

||| Height measurement
data Height
  = Centimeters Amount
  | Feet Amount
  | Meters Amount

||| Weight measurement
data Weight
  = Kilogram Amount
  | Pounds Amount
  | Stone Amount

||| Athletic participant,
record Athlete where
  constructor MkAthlete
  name   : Name
  height : Height
  weight : Weight

||| Footballparticipant
record Player where
  constructor MkPlayer
  athlete  : Athlete
  position : Position

-------------------------------------------------------------
--- Instances
-------------------------------------------------------------

||| Show name
implementation Show Name where
  show (Personal name) = name
  show (Surname  name) = "Mr."  ++ name
  show (NickName name) = "AKA:" ++name

||| Show height
implementation Show Height where
  show (Centimeters amount) = (show amount) ++ "cm"
  show (Feet amount)   = (show amount) ++ "ft"
  show (Meters amount) = (show amount) ++ "m"

||| Show weight
implementation Show Weight where
  show (Kilogram amount) = (show amount) ++ "kg"
  show (Pounds amount)   = (show amount) ++ "lbs"
  show (Stone amount)    = (show amount) ++ "st"

||| Show athlete
implementation Show Athlete where
  show (MkAthlete name height weight) =
    (show name) ++ " " ++ (show height) ++ " " ++(show weight)

-------------------------------------------------------------
--- Basic effect based program
-------------------------------------------------------------

||| Abstract IO based application
app : { [STDIO] } Eff ()
app = do  putStrLn "Do you want to be 1) Kolin 'Super Kap' Kap or  2) Marshawn 'BeastMode' Lynch?"
          name <- getStr
          if name == "1" then (putStrLn (show kolin)) else app
  where
  kolin : Athlete
  kolin    = MkAthlete (Personal "Kolin") (Feet 6) (Pounds 200)
  marshawn : Athlete
  marshawn = MkAthlete (NickName "BeastMode") (Feet 6) (Pounds 200)

-------------------------------------------------------------
--- Program entry
-------------------------------------------------------------

||| Run application
main : IO ()
main =  run app
