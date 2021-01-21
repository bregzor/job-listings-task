import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 60vw;
height: 100%;
justify-content:center;
margin:auto;
padding:50px;
`
const JobHeader = styled.h1``
const JobList = styled.div``


export default function BaseLayout({children}) {
    return (
       <Wrapper>
        <JobHeader>Job-listings</JobHeader>
        <JobList>{children}</JobList>
       </Wrapper>
    )
}
