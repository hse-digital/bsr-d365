﻿<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[Please Review: Lifecycle Record&nbsp; (<span style="font-family:Arial,Helvetica,sans-serif;">]]><xsl:choose><xsl:when test="bsr_buildingcontrollifecycle/bsr_bclreference"><xsl:value-of select="bsr_buildingcontrollifecycle/bsr_bclreference" /></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><![CDATA[</span>)]]></xsl:template></xsl:stylesheet>