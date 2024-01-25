﻿<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[<div><img src="data:image/png;base64,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" style="height:76px; width:1123px"></div>
<div>&nbsp;</div>
<div><div><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">Dear %papOrgLeadContact%</span></span></span></div>
<div><br><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">%applicant% has asked us to make changes to the information we hold about %buildingName%.</span></span></span></div>
<div><br><span lang="EN-GB" style="font-size:12.0pt"><span style="line-height:115%"><span style="font-family:&quot;Arial&quot;,sans-serif">To access a summary of these changes, return to your application at </span></span></span><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif"><a href="https://www.gov.uk/register-high-rise-building" style="color:#0563c1; text-decoration:underline">www.gov.uk/register-high-rise-building</a></span></span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">You’ll need to be one of the authorised users to access the summary of changes in the online service.</span></span></span></div>
<div>&nbsp;</div>
<h2 style="margin-bottom:16px; margin-top:24px"><span style="font-size:16pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">What happens next</span></span></span></h2>
<div><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">We’ll make the changes requested to the building’s registration,</span></span></span></div>
<div><br><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">You can check if you need to tell us about other changes at <a href="https://www.gov.uk/guidance/applying-to-register-a-high-rise-residential-building#making-changes" style="color:#0563c1; text-decoration:underline"> https://www.gov.uk/guidance/applying-to-register-a-high-rise-residential-building#making-changes</a></span></span></span></div>
<div><br><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">From the Health and Safety Executive<br>as the Building Safety Regulator</span></span></span></div>
<div>&nbsp;</div>
<div align="center" style="margin-bottom:16px; text-align:center"><hr align="center" size="2" width="100%"></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="line-height:115%"><span style="font-family:Arial,sans-serif">Do not reply to this email. It’s an automatic message from an unmonitored account.</span></span></span></div></div>]]></xsl:template></xsl:stylesheet>