import User from "@/models/userModel";
import { connectMongoDB } from "@/lib/mongodb";
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcryptjs'

 export const options: NextAuthOptions = {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }),
            CredentialsProvider({
                name:"credentials",
                credentials: {
                },
                async authorize(credentials:any){
                    const {email, password} = credentials
                    try {
                        
                        await connectMongoDB()
                        const user = await User.findOne({email})
                        if(!user){
                            return null
                        }
                        const passwordsMatch = await bcrypt.compare(password, user.password)
                        if(!passwordsMatch){
                            return null
                        }
                       
                        return user;
                    } catch (error) {
                        console.log(error)
                        return null
                    }
                }
            })
        ],
        session: {
            strategy:"jwt"
        },
        secret:process.env.NEXTAUTH_SECRET,
        pages: {
            signIn: "/login",
        }
    }