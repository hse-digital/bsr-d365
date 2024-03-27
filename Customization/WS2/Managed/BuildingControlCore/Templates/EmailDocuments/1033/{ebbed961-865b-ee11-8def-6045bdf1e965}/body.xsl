﻿<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[<div><span style="font-family:Arial,Helvetica,sans-serif"><img src="data:image/png;base64,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" style="height:87px; width:1394px"></span></div>
<div><div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">Dear %%bsr_recipient%%,</span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif"><span style="line-height:107%">The building control application reference is %%bsr_bcaareferencenumber%%.</span></span></span></div>
<div>&nbsp;</div>
<div><span class="keyboardFocusClass"><span style="line-height:107%"><span class="keyboardFocusClass" style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12pt">The building name is %%bsr_buildingdetailsname%%</span></span></span></span><span style="color:#373737; font-family:Ubuntu,sans-serif; font-size:15px"> </span><span style="font-family:Arial,Helvetica,sans-serif; font-size:12pt">.</span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif"><span style="line-height:107%">We would like to inform you of the following Information Request being made to yourself:</span></span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">%%bsr_inforeqcasenote%%</span></span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">This information is related to: %%bsr_inforeqrelatedto%%</span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif"><span style="line-height:107%">Please submit the required information by the following due date: %%bsr_inforeqtargetdate%%</span></span></span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif"><span style="line-height:107%">Please visit the following link to submit the requested information: %%bsr_buildingcontrolwebsiteurl%%</span><br><br><br><span style="line-height:107%">Please note that any delay in providing this information may delay the progress of your project.</span></span></span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">If you have any questions about this request, please contact the Regulatory Lead or Case Officer.</span></span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">Kind regards,</span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">%%bsr_regulatoryleadid%%<br>Regulatory Lead</span></span></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">%%bsr_caseofficerid%%<br>Case Officer</span></span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif">From the Health and Safety Executive<br>as the Building Safety Regulator&nbsp;</span></span></div>
<div>&nbsp;</div>
<div><div align="center" style="margin-bottom:16px; text-align:center"><hr align="center" size="2" width="100%"></div>
<div>&nbsp;</div>
<div><span style="font-size:12pt"><span style="font-family:Arial,Helvetica,sans-serif"><span style="line-height:115%">Do not reply to this email. It’s an automatic message from an unmonitored account.</span></span></span></div></div></div></div></div>]]></xsl:template></xsl:stylesheet>