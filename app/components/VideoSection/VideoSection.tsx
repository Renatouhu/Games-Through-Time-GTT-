"use client"
import * as react from 'react'
import Image from "next/image"
import {
    retroTV, videoSection, videoScreen, tvImage, gameSelection, pauseButton, playButton,
    pauseClickedOn, pauseClickedOff, playClickedOn, playClickedOff, textSection, interection,
    gameToSelect
} from "./VideoSection.css"
import { SoundIcon } from "../SoundIcon/SoundIcon"
import { LucideProps, Volume2, VolumeX, Pause, Play } from "lucide-react"

interface soundIconProps {
    icon: react.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & react.RefAttributes<SVGSVGElement>>,
    variantStyle: any
}

export function VideoSection() {
    const videoRef = react.useRef<HTMLVideoElement>(null!)
    const isMuted = react.useRef(true)
    const [playClickedStyle, setPlayClickedStyle] = react.useState<string>()
    const [pauseClickedStyle, setPauseClickedStyle] = react.useState<string>()
    const [games] = react.useState([
        {
            name: 'Resident Evil 1',
            imagePath: '/images/residentEvil1Cover.png',
            videoPath: '/videos/residentEvil1.mp4'
        },
        {
            name: 'Super Mario 64',
            imagePath: '/images/superMario64Cover.jpg',
            videoPath: '/videos/superMario64.mp4'
        },
        {
            name: 'Final Fantasy VII',
            imagePath: '/images/finalFantasyVII.jpg',
            videoPath: '/videos/finalFantasyVII.mp4'
        }
    ])
    const [videoOn, setVideoOn] = react.useState(games[0])
    const [soundIcon, setSoundIcon] = react.useState<soundIconProps>({ icon: VolumeX, variantStyle: "soundOff" })

    function switchVolume() {
        if (soundIcon.icon === Volume2) {
            setSoundIcon({ icon: VolumeX, variantStyle: "soundOff" })
            isMuted.current = true
            return
        }
        setSoundIcon({ icon: Volume2, variantStyle: "soundOn" })
        isMuted.current = false
    }

    function pauseVideo() {
        videoRef.current?.pause()
        setPauseClickedStyle(pauseClickedOn)
    }

    async function playVideo() {
        videoRef.current?.play()
        setPauseClickedStyle(pauseClickedOff)
        setPlayClickedStyle(playClickedOn)
        await new Promise(res => setTimeout(res, 1000))
        setPlayClickedStyle(playClickedOff)
    }

    async function switchVideo(gameOn: any, ended: boolean) {
        if (ended === true) {
            const actualVideoOnIndex = games.findIndex(x => x === videoOn)
            const index = (actualVideoOnIndex + 1) % games.length
            setVideoOn(games[index])
            await new Promise(res => setTimeout(
                () => { videoRef.current.load() }
                , 500))
            return
        }
        setVideoOn(gameOn)
        videoRef.current.load()
        setPauseClickedStyle(pauseClickedOff)
    }

    return (
        <section className={videoSection}>
            <div className={interection}>
                <div className={retroTV}>
                    <video ref={videoRef} className={videoScreen} autoPlay muted={isMuted.current} onEnded={() => switchVideo(null, true)}>
                        <source src={videoOn.videoPath} type="video/mp4" />
                    </video>
                    <Image className={tvImage} src={'/images/tvRetro.png'} width={415} height={355} alt="old TV from begining of 00's" />
                    <SoundIcon VariantIcon={soundIcon.icon} variantStyle={soundIcon.variantStyle} onClickFn={switchVolume} />
                    <Pause className={`${pauseButton} ${pauseClickedStyle}`} onClick={pauseVideo} />
                    <Play className={`${playButton} ${playClickedStyle}`} onClick={playVideo} />
                </div>
                <div className={gameSelection}>
                    {games.map(game => {
                        return (
                            <Image src={game.imagePath} key={crypto.randomUUID()} onClick={() => switchVideo(game, false)} className={gameToSelect} width={120} height={110} alt={`The Cover from ${game.name}`} />
                        )
                    })}
                </div>
            </div>
            <span>
                <h2 className={textSection}>
                    Access to games playthroughs <br />
                    from all generations
                </h2>
            </span>
        </section>
    )
}