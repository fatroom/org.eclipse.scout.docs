/*
 * Copyright (c) 2019 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.contacts.events.shared.event;

import java.util.Date;

import javax.annotation.Generated;

import org.eclipse.scout.rt.shared.data.basic.table.AbstractTableRowData;
import org.eclipse.scout.rt.shared.data.page.AbstractTablePageData;

/**
 * <b>NOTE:</b><br>
 * This class is auto generated by the Scout SDK. No manual modifications recommended.
 */
@Generated(value = "org.eclipse.scout.contacts.events.client.event.EventTablePage", comments = "This class is auto generated by the Scout SDK. No manual modifications recommended.")
public class EventTablePageData extends AbstractTablePageData {
  private static final long serialVersionUID = 1L;

  @Override
  public EventTableRowData addRow() {
    return (EventTableRowData) super.addRow();
  }

  @Override
  public EventTableRowData addRow(int rowState) {
    return (EventTableRowData) super.addRow(rowState);
  }

  @Override
  public EventTableRowData createRow() {
    return new EventTableRowData();
  }

  @Override
  public Class<? extends AbstractTableRowData> getRowType() {
    return EventTableRowData.class;
  }

  @Override
  public EventTableRowData[] getRows() {
    return (EventTableRowData[]) super.getRows();
  }

  @Override
  public EventTableRowData rowAt(int index) {
    return (EventTableRowData) super.rowAt(index);
  }

  public void setRows(EventTableRowData[] rows) {
    super.setRows(rows);
  }

  public static class EventTableRowData extends AbstractTableRowData {
    private static final long serialVersionUID = 1L;
    public static final String eventId = "eventId";
    public static final String title = "title";
    public static final String starts = "starts";
    public static final String ends = "ends";
    public static final String city = "city";
    public static final String country = "country";
    public static final String homepage = "homepage";
    public static final String participants = "participants";
    private String m_eventId;
    private String m_title;
    private Date m_starts;
    private Date m_ends;
    private String m_city;
    private String m_country;
    private String m_homepage;
    private Integer m_participants;

    public String getEventId() {
      return m_eventId;
    }

    public void setEventId(String newEventId) {
      m_eventId = newEventId;
    }

    public String getTitle() {
      return m_title;
    }

    public void setTitle(String newTitle) {
      m_title = newTitle;
    }

    public Date getStarts() {
      return m_starts;
    }

    public void setStarts(Date newStarts) {
      m_starts = newStarts;
    }

    public Date getEnds() {
      return m_ends;
    }

    public void setEnds(Date newEnds) {
      m_ends = newEnds;
    }

    public String getCity() {
      return m_city;
    }

    public void setCity(String newCity) {
      m_city = newCity;
    }

    public String getCountry() {
      return m_country;
    }

    public void setCountry(String newCountry) {
      m_country = newCountry;
    }

    public String getHomepage() {
      return m_homepage;
    }

    public void setHomepage(String newHomepage) {
      m_homepage = newHomepage;
    }

    public Integer getParticipants() {
      return m_participants;
    }

    public void setParticipants(Integer newParticipants) {
      m_participants = newParticipants;
    }
  }
}
