﻿<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[<span lang="EN-GB" style="font-size:12.0pt;"><span style="line-height:115%;"><span style="font-family:&quot;Arial&quot;,sans-serif;">Someone else has registered&nbsp;]]><xsl:choose><xsl:when test="bsr_buildingapplication/bsr_building/@name"><xsl:value-of select="bsr_buildingapplication/bsr_building/@name" /></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><![CDATA[</span></span></span>]]></xsl:template></xsl:stylesheet>