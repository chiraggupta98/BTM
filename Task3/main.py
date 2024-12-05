import pyttsx3
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os
import google.generativeai as genai

engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)  


history =[]

def runapi(audio):
    

    genai.configure(api_key="AIzaSyBpDvqGgy9RSDOPBk3OFo3mGZ4vAYo29u8")

    # Create the model
    generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 200,
    "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
   
    )

    chat_session = model.start_chat(
    history=history
    )

    response = chat_session.send_message(audio)


    return response.text



def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning Sir")
    elif hour >= 12 and hour < 18:
        speak("Good Afternoon Sir")
    else:
        speak("Good Evening Sir")

    speak("I am Alexa , please tell me how may i help you")

def takeCommand():
    # Takes microphone input from the user and returns string output
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
    try:
        print("Processing...")
        query = r.recognize_google(audio, language='EN-IN')
        print(f"User Said: {query}\n")
    except sr.UnknownValueError:
        speak("I did not understand what you said. Please say it again")
        return "None"
    except sr.RequestError:
        speak("I'm sorry, I am unable to connect to the server")
        return "None"
    return query



if __name__ == "__main__":
    wishMe()
    
    while True:
        query = takeCommand().lower()

        if 'stop' in query:
            speak("Ok Sir")
            break

        else:
            res= runapi(query)
            # history.append({"query": query, "response": res})
            print(res)
            speak(res)
